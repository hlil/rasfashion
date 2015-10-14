using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PersonalProject.API
{
    public class CartItemController : ApiController
    {

        // GET: api/CartItem
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CartItem/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CartItem
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CartItem/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CartItem/5
        public void Delete(int id)
        {
        }
    }
}
