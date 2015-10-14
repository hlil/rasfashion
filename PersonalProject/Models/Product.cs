using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalProject.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string productName { get; set; }
        public string productID { get; set; }
        public string material { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public string imageUrl { get; set; }
        public Category Category { get; set; }
        public CartItem CartItem { get; set; }
    }
}