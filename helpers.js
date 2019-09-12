exports.within = (current, min, max) => current >= min && current <= max

exports.taxable = amount => {
  if(exports.within(amount, 0, 195850)) return 0.18
  if(exports.within(amount, 195851, 305850)) return 0.26
  if(exports.within(amount, 305851, 423300)) return 0.31
  if(exports.within(amount, 423301, 555600)) return 0.36
  if(exports.within(amount, 555601, 708310)) return 0.39
  if(exports.within(amount, 708311, 1500000)) return 0.41
  return 0.45
}

exports.additional = amount => {
  if(exports.within(amount, 0, 195850)) return 0
  if(exports.within(amount, 195851, 305850)) return 35253
  if(exports.within(amount, 305851, 423300)) return 65853
  if(exports.within(amount, 423301, 555600)) return 100263
  if(exports.within(amount, 555601, 708310)) return 147891
  if(exports.within(amount, 708311, 1500000)) return 207448
  return 532041
}

exports.taxing = amount => ([
  exports.additional(amount),
  amount * exports.taxable(amount)
])

