using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalProject.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int ProductPrice { get; set; }
        public int shipping { get; set; }
        public int qauntity { get; set; }
        public int Toatl { get; set; }

    }
}