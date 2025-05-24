export class Coordenada {
  latitude: number;
  longitude: number;

  constructor(
    latitude: number | null | undefined,
    longitude: number | null | undefined
  ) {
    if (!latitude || !longitude) {
      throw new Error('Latitude e longitude são obrigatórios');
    }

    this.latitude = latitude;
    this.longitude = longitude;
  }

  static fromForm(formData: {
    latitude: number | null | undefined;
    longitude: number | null | undefined;
  }): Coordenada {
    return new Coordenada(formData.latitude, formData.longitude);
  }
}
