import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(seconds?: number): string {
    if (!seconds && seconds !== 0) {
      return ''
    }

    const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
    // const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60

    return [Math.floor(minutes), format(seconds % 60)].join(':')
  }
}
