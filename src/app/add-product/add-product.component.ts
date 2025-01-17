import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { Category } from '../model/Category';

@Component({
  standalone: false,
  selector: 'app-add-product',
  //imports: [],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  //product: Product[]=[];
  product: Product = new Product();
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((data) => (this.categories = data));
  }

  addProduct(): void {
    const productToAdd = {
      name: this.product.name,
      price: this.product.price,
      category: { id: this.product.category.id }, // Seulement l'ID de la catégorie
    };

    this.productService.addProduct(productToAdd).subscribe(
      (response) => {
        alert('Produit ajouté avec succès');
        this.product = new Product(); // Réinitialiser le formulaire
        console.log(this.product);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du produit", error);
      }
    );
    console.log(JSON.stringify(productToAdd));
  }
}
