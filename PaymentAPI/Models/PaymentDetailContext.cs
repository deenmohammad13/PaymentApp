using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

namespace PaymentDetail.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Paymentdetail> Paymentdetails { get; set; }
    }
}
