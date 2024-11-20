export function countInstitutionSize(data) {
  // Tạo một object để lưu số lượng theo từng loại inst_ensize
  const sizeCounts = {
    'Very Small': 0,
    Small: 0,
    Medium: 0,
    Large: 0,
    'Very Large': 0
  }

  // Duyệt qua từng phần tử trong mảng
  data.forEach(institution => {
    const size = institution.inst_ensize
    // Kiểm tra nếu inst_ensize tồn tại trong sizeCounts thì tăng số lượng
    if (sizeCounts[size] !== undefined) {
      sizeCounts[size]++
    }
  })

  return sizeCounts
}

export const countByControl = data => {
  return data.reduce(
    (acc, item) => {
      switch (item.control) {
        case '1':
          acc.Public += 1
          break
        case '2':
          acc['Private Nonprofit'] += 1
          break
        case '3':
          acc['Private For-profit'] += 1
          break
        default:
          break
      }
      return acc
    },
    {
      Public: 0,
      'Private Nonprofit': 0,
      'Private For-profit': 0
    }
  )
}

export function groupInstitutionsByLoanRate(data) {
  const ranges = Array.from({ length: 10 }, (_, i) => ({
    min: (i + 1) / 10,
    max: (i + 2) / 10,
    institutions: []
  }))

  data.forEach(institution => {
    const loanRate = parseFloat(institution.loan_rate)
    if (!isNaN(loanRate)) {
      const range = ranges.find(r => loanRate >= r.min && loanRate < r.max)
      if (range) {
        range.institutions.push(institution)
      }
    }
  })

  return ranges.map(r => ({
    range: `${r.min.toFixed(1)} - ${r.max.toFixed(1)}`,
    institutions: r.institutions
  }))
}

export function groupByMedianDebt(data) {
  const ranges = [
    { min: 1, max: 5000, institutions: [] },
    { min: 5001, max: 10000, institutions: [] },
    { min: 10001, max: 15000, institutions: [] },
    { min: 15001, max: 20000, institutions: [] },
    { min: 20001, max: Infinity, institutions: [] }
  ]

  data.forEach(institution => {
    const medianDebt = institution.median_debt === 'NULL' ? null : parseInt(institution.median_debt)

    if (medianDebt !== null) {
      // Tìm range phù hợp cho median_debt
      const range = ranges.find(r => medianDebt >= r.min && medianDebt <= r.max)
      if (range) {
        range.institutions.push(institution)
      }
    }
  })

  return ranges.map(r => ({
    range: `${r.min} ${r.max === Infinity ? '' : `- ${r.max}`}`,
    institutions: r.institutions
  }))
}
