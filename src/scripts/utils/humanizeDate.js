import humanize from './humanize'
import capitalize from './capitalize'

export default function humanizeDate($date) {
  const dateTime = $date.getAttribute("datetime")
  const humanizedDate = humanize(dateTime)
  $date.textContent = capitalize(humanizedDate)
}
