namespace PersonalProject.Migrations
{
    using PersonalProject.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Security.Claims;



    internal sealed class Configuration : DbMigrationsConfiguration<PersonalProject.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PersonalProject.Models.ApplicationDbContext context)
        {
            var product = new Product[]{
             new Product 
             { productName= "shouldersash", productID="ET12",material="cotton", description="the collest ever"
              ,price = 34.65, imageUrl="http://g02.s.alicdn.com/kf/HTB1GwDBHVXXXXc_XVXXq6xXFXXX2/Dondoors-home-textile.jpg" },
             
              new Product 
              {productName= "wrap", productID="ET322",material="Garment", description="this!! it worth"
              ,price = 34.65, imageUrl="http://g02.s.alicdn.com/kf/HTB1GwDBHVXXXXc_XVXXq6xXFXXX2/Dondoors-home-textile.jpg" }        
            
         };
            context.Products.AddOrUpdate(p => p.productName, product);

            var category = new Category[]{
                new Category 
                { Name ="womwns" , property = "cultural top clothes " },
                new Category
                {  Name = "kids" , property  = "here are some switt kids clothes" }
            };
            context.Categories.AddOrUpdate(c => c.Name, category);


         var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            // Ensure Stephen
            var user = userManager.FindByName("samallsam@outlook.com");
            if (user == null)
            {
                // create user
                user = new ApplicationUser
                {
                    UserName = "samallsam@outlook.com",
                    Email = "samallsam@outlook.com"
                };
                userManager.Create(user, "Secret123@");

                // add claims
                userManager.AddClaim(user.Id, new Claim("CanEditProducts", "true"));
                userManager.AddClaim(user.Id, new Claim(ClaimTypes.DateOfBirth, "23/3/1995"));
            }
        }
    }
}