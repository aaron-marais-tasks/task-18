// If current amount if within a limit
exports.within = (current, min, max) => current >= min && current <= max

// Calculate taxable percentage
exports.taxable = amount => {
  // If amount within 0 and 195850
  if(exports.within(amount, 0, 195850)) return 0.18
  
  // If amount within 195851 and 305850
  if(exports.within(amount, 195851, 305850)) return 0.26
  
  // If amount within 305851 and 423300
  if(exports.within(amount, 305851, 423300)) return 0.31
  
  // If amount within 423301 and 555600
  if(exports.within(amount, 423301, 555600)) return 0.36
  
  // If amount within 555601 and 708310
  if(exports.within(amount, 555601, 708310)) return 0.39
  
  // If amount within 708311 and 1500000
  if(exports.within(amount, 708311, 1500000)) return 0.41
  
  // If amount above 1500000
  return 0.45
}

exports.additional = amount => {
  // If amount within 0 and 195850
  if(exports.within(amount, 0, 195850)) return 0

  // If amount within 195851 and 305850
  if(exports.within(amount, 195851, 305850)) return 35253

  // If amount within 305851 and 423300
  if(exports.within(amount, 305851, 423300)) return 65853

  // If amount within 423301 and 555600
  if(exports.within(amount, 423301, 555600)) return 100263

  // If amount within 555601 and 708310
  if(exports.within(amount, 555601, 708310)) return 147891

  // If amount within 708311 and 1500000
  if(exports.within(amount, 708311, 1500000)) return 207448

  // If amount above 1500000
  return 532041
}

// Calculate amount of tax to be paid
exports.taxing = amount => ([
  exports.additional(amount),
  amount * exports.taxable(amount)
])

