import { FormControl } from "@angular/forms";

export interface CoordenadaForm {
  longitude: FormControl<number | null | undefined>;
  latitude: FormControl<number | null | undefined>;
}
