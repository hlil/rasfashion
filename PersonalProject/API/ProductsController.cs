using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using PersonalProject.Models;
using PersonalProject.Services;
using System.Net.Http;
using System.Net;

namespace PersonalProject.API
{
    public class ProductsController:ApiController
    {
        private IProductServices _productservice;

        public ProductsController(IProductServices productservices)
        {
            _productservice = productservices;
            
        }
        public IEnumerable<Product> Get()
        {

            var modal = _productservice.ListProduts();
            return modal;

        }
       
        public Product Get(int id)
        {
            return _productservice.Detail(id);
        
        }
        public HttpResponseMessage Post(Product product)
        {
            if (ModelState.IsValid)
            {
                if (product.Id == 0)
                {
                    _productservice.Create(product);
                    return Request.CreateResponse(HttpStatusCode.OK, product);
                }
                else
                {
                    _productservice.EditProducts(product);
                    return Request.CreateResponse(HttpStatusCode.OK, product);
                }
            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, this.ModelState);
        }
        public void DeleteProduct(int id)
        {
            _productservice.DeleteProducts(id);
        }
        
    }
    
}