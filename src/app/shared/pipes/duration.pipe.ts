import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(seconds: number): string {
    const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
    // const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60

    if (seconds === 60) {
      return `${minutes + 1}:00`
    }

    return [minutes, seconds % 60].map(format).join(':')
  }
}
