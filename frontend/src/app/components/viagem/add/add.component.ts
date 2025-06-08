import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ViagemForm } from '../../../interfaces/form/viagem-form';
import { Viagem } from '@models';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ViagemService } from '@services';

@Component({
  selector: 'iso-viagem-add',
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  standalone: true,
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddViagemComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  protected viagemForm!: FormGroup<ViagemForm>;

  protected get viagem(): ViagemForm {
    return this.viagemForm.controls;
  }

  protected onLimpar(): void {
    this.viagemForm.reset();
  }

  protected onSubmit(): void {
    if (this.viagemForm.invalid) {
      return;
    }

    const formValue = this.viagemForm.value;
    const mappedFormValue = {
      inicio: formValue.ida,
      fim: formValue.volta,
      destino: formValue.destino,
    };
    const novaViagem = Viagem.fromForm(mappedFormValue);

    this.viagemService.post(novaViagem).subscribe({
      next: (viagem) => {
        console.log('Viagem criada com sucesso:', viagem);
      },
      error: (error) => {
        console.error('Erro ao criar viagem:', error);
      },
    });
    //this.onLimpar();
  }

  public constructor(private viagemService: ViagemService) {}

  public ngOnInit(): void {
    this.viagemService.get().subscribe((viagens) => {
      console.log('Viagens obtidas:', viagens);
    });

    this.viagemForm = this.formBuilder.group<ViagemForm>({
      destino: new FormControl(null, Validators.required),
      ida: new FormControl<Date | null | undefined>(null, Validators.required),
      volta: new FormControl<Date | null | undefined>(
        null,
        Validators.required
      ),
    });
  }
}
