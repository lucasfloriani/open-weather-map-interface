import { DateTime } from 'luxon'

export const formatTime = timezone => {
  return DateTime.fromSQL(timezone).toFormat('HH:mm')
}

export const formatDate = date => {
  return DateTime.fromISO(date).toFormat('dd/MM/yyyy')
}
