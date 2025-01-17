import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/Category';

@Component({
  standalone: false,
  selector: 'app-product-list',
  // imports: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategoryId: number | null | undefined | any = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts(): void {
    if (
      this.selectedCategoryId !== null &&
      this.selectedCategoryId !== undefined
    ) {
      this.productService
        .getProductsByCategory(this.selectedCategoryId)
        .subscribe((data) => (this.products = data));
    } else {
      this.productService
        .getAllProducts()
        .subscribe((data) => (this.products = data));
    }
  }

  loadCategories(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((data) => (this.categories = data));
  }

  onCategoryChange(): void {
    console.log(
      'Valeur avant conversion:',
      this.selectedCategoryId,
      typeof this.selectedCategoryId
    );

    this.selectedCategoryId = Number(this.selectedCategoryId); // Convertir en nombre

    console.log(
      'Valeur après conversion:',
      this.selectedCategoryId,
      typeof this.selectedCategoryId
    );

    if (this.selectedCategoryId === 0) {
      this.loadProducts(); // Charger tous les produits
    } else {
      this.productService
        .getProductsByCategory(this.selectedCategoryId)
        .subscribe((data) => {
          console.log('Produits reçus:', data); // Debug
          this.products = Array.isArray(data) ? data : [];
        });
    }
    /* console.log('Catégorie sélectionnée:', this.selectedCategoryId); // Debug

    if (!this.selectedCategoryId || this.selectedCategoryId === null) {
      this.selectedCategoryId = null; // Assurez-vous que c'est bien null
      this.loadProducts(); // Charger tous les produits
    } else {
      // Charger les produits pour la catégorie sélectionnée
      this.productService
        .getProductsByCategory(this.selectedCategoryId)
        .subscribe((data) => {
          if (Array.isArray(data)) {
            this.products = data; // Assurez-vous que c'est bien un tableau
          } else {
            console.error('Erreur : données inattendues reçues', data);
            this.products = []; // Réinitialiser si les données sont incorrectes
          }
        });
    }  */
  }
}
