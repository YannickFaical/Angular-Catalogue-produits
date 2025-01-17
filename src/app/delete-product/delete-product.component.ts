import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  standalone: false,
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  @Input() productId!: number;

  constructor(private productService: ProductService) {}

  deleteProduct(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.productService.deleteProduct(this.productId).subscribe(
        () => {
          alert('Produit supprimé avec succès');
          location.reload();
          // Ajoutez ici toute logique supplémentaire après la suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du produit', error);
          alert('Une erreur est survenue lors de la suppression du produit');
        }
      );
    }
  }
}
