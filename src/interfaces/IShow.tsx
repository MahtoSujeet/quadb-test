export default interface IShow {
  show: {
    id: number
    name: string
    rating: {
      average: number | null
    }
    image: {
      medium: string
      original: string
    }
    summary: string
  }
}

