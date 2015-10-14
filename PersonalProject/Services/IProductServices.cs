using System;
namespace PersonalProject.Services
{
    public interface IProductServices
    {
        void DeleteProducts(int id);
        void EditProducts(PersonalProject.Models.Product product);
        PersonalProject.Models.Product FindProducts(int id);
        System.Collections.Generic.IList<PersonalProject.Models.Product> ListProduts();

        void Create(Models.Product product);

        Models.Product Detail(int id);
    }
}
