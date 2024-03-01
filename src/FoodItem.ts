export default class FoodItem {
  constructor(
    public calories: number,
    public carbohydrates_total_g: number,
    public cholesterol_mg: number,
    public fat_saturated_g: number,
    public fat_total_g: number,
    public fiber_g: number,
    public name: string,
    public potassium_mg: number,
    public protein_g: number,
    public serving_size_g: number,
    public sodium_mg: number,
    public sugar_g: number,
  ) {}
}
