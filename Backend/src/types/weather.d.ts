declare namespace Weather {

  export type Location = {
    city : string
  }
  
  export type Weather = {
    city : string,
    temp: number,
    description: string,
    urlIcon: string,
    tempMin: number,
    tempMax: number, 
    humidity: number
    date: string | null
  }

}
