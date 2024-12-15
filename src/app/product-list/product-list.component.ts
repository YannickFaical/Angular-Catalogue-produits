
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
  selectedCategoryId: number | null | undefined= null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.selectedCategoryId) {
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
    if (this.selectedCategoryId === null || this.selectedCategoryId === undefined) {
      // Si aucune catégorie n'est sélectionnée, charger tous les produits
      this.productService.getAllProducts().subscribe((data) => {
        this.products = data;
      });
    }  else {
      // Charger les produits pour la catégorie sélectionnée
      this.productService.getProductsByCategory(this.selectedCategoryId).subscribe((data) => {
        if (Array.isArray(data)) {
          this.products = data; // Assurez-vous que c'est bien un tableau
        } else {
          console.error('Erreur : données inattendues reçues', data);
          this.products = []; // Réinitialiser si les données sont incorrectes
        }
      });
    }
  }
}

