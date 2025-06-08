import { FormControl } from "@angular/forms";

export interface ViagemForm {
  ida: FormControl<Date | null | undefined>;
  volta: FormControl<Date | null | undefined>;
  destino: FormControl<string | null | undefined>;
}
