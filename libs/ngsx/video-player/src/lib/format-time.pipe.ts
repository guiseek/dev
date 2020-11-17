import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  times = {
    year: 31557600,
    month: 2629746,
    day: 86400,
    hour: 3600,
  }

  transform(seconds: number, ...args: unknown[]): unknown {
    if (!seconds) return '0:00'
    else {
      let time_string = ''
      for (const key in this.times) {
        if (Math.floor(seconds / this.times[key]) > 0) {
          time_string += Math.floor(seconds / this.times[key]).toString() + ':'
          seconds =
            seconds - this.times[key] * Math.floor(seconds / this.times[key])
        }
      }
      time_string += Math.floor(seconds / 60).toString() + ':'
      seconds = seconds - 60 * Math.floor(seconds / 60)
      if (Math.floor(seconds) < 10) time_string += '0'
      time_string += Math.floor(seconds).toString()
      return time_string
    }
  }
}
