using CoderCamps;
using PersonalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalProject.Services
{
    public class ProductServices : PersonalProject.Services.IProductServices 
    {
        private IGenericRepository _repo;
        public ProductServices(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<Product> ListProduts()
        {
            return _repo.Query<Product>().ToList();
        }
        public Product FindProducts(int id)
        {
           return _repo.Query<Product>().Include(m => m.productName).Where(m => m.Id == id).First();
        }

        public void Create(Product product)
        {
            _repo.Add<Product>(product);
            _repo.SaveChanges();
        }
        
        public Product Detail(int id)
        {
            return _repo.Query<Product>().Include(p => p.productName)
                .Include(p => p.material)
                .Include(p => p.price)
                .Include(p => p.imageUrl)
                .Where(p => p.Id == id).FirstOrDefault();

        }

        public void EditProducts(Product product)
        {
            var original = this.FindProducts(product.Id);
            original.productName = product.productName;
            original.productID = product.productID;
            original.material = product.material;
            original.description = product.description;
            original.price = product.price;
            original.imageUrl = product.imageUrl;
            _repo.SaveChanges();

        }
           
        public void DeleteProducts(int id)
        {
            var original = this.FindProducts(id);
            _repo.Delete<Product>(original);
            _repo.SaveChanges();

        }
       
    }
}