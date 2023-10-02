export type IProduct<T> = T extends 'shoes' ? IShoes : ITshirt
// gender: 'male' | 'female'
// brand: string
// title: string
// material: string
// model: string

interface IShoes {
  categories: 'shoes'
  size: number[]
}

interface ITshirt {
  categories: 't-shirt'
  size: 's' | 'm' | 'l'
}
