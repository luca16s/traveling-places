import { Directive, Input, OnInit, OnDestroy, Self } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith, distinctUntilChanged, filter } from 'rxjs/operators';

@Directive({
  selector: '[isoDisabled]',
  standalone: true,
})
export class DisabledFieldDirective implements OnInit, OnDestroy {
  @Input('isoDisabled') sourceControl: FormControl | null | undefined;

  private subscription = new Subscription();
  private targetControl: FormControl | null | undefined;

  constructor(@Self() private ngControl: NgControl) {}

  ngOnInit(): void {
    if (!this.sourceControl) {
      return;
    }

    this.targetControl = this.ngControl.control as FormControl;

    this.toggleTargetControl(this.sourceControl.value);

    this.subscription.add(
      this.sourceControl.valueChanges
        .pipe(
          startWith(this.sourceControl.value),
          distinctUntilChanged(),
          filter((value) => value !== null || value !== undefined)
        )
        .subscribe((sourceValue) => {
          this.toggleTargetControl(sourceValue);
        })
    );
  }

  private toggleTargetControl(sourceValue: any): void {
    if (!this.targetControl) {
      return;
    }

    if (
      sourceValue &&
      ((typeof sourceValue === 'string' && sourceValue.trim() !== '') ||
        typeof sourceValue !== 'string')
    ) {
      if (this.targetControl.disabled) {
        this.targetControl.enable({ emitEvent: false });
      }
    } else {
      if (this.targetControl.enabled) {
        this.targetControl.disable({ emitEvent: false });
        this.targetControl.reset(undefined, { emitEvent: false });
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
