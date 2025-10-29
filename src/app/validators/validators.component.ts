import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function provinciaEcuadorValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const provinciasEcuador = [
      'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro',
      'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos',
      'Manabi', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha',
      'Santa Elena', 'Santo Domingo', 'Sucumbíos', 'Tungurahua',
      'Zamora Chinchipe'
    ];

    const valor = control.value.trim().toLowerCase();
    const esValida = provinciasEcuador.some(
      provincia => provincia.toLowerCase() === valor
    );

    return esValida ? null : { provinciaInvalida: true };
  };
}
