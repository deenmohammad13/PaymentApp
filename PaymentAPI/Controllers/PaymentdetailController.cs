using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;
using PaymentDetail.Models;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentdetailController : ControllerBase
    {
        private readonly PaymentDetailContext _context;

        public PaymentdetailController(PaymentDetailContext context)
        {
            _context = context;
        }

        // GET: api/Paymentdetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paymentdetail>>> GetPaymentdetails()
        {
            return await _context.Paymentdetails.ToListAsync();
        }

        // GET: api/Paymentdetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paymentdetail>> GetPaymentdetail(int id)
        {
            var paymentdetail = await _context.Paymentdetails.FindAsync(id);

            if (paymentdetail == null)
            {
                return NotFound();
            }

            return paymentdetail;
        }

        // PUT: api/Paymentdetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentdetail(int id, Paymentdetail paymentdetail)
        {
            if (id != paymentdetail.PaymentDetailId)
            {
                return BadRequest();
            }

            _context.Entry(paymentdetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentdetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Paymentdetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Paymentdetail>> PostPaymentdetail(Paymentdetail paymentdetail)
        {
            _context.Paymentdetails.Add(paymentdetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymentdetail", new { id = paymentdetail.PaymentDetailId }, paymentdetail);
        }

        // DELETE: api/Paymentdetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymentdetail(int id)
        {
            var paymentdetail = await _context.Paymentdetails.FindAsync(id);
            if (paymentdetail == null)
            {
                return NotFound();
            }

            _context.Paymentdetails.Remove(paymentdetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentdetailExists(int id)
        {
            return _context.Paymentdetails.Any(e => e.PaymentDetailId == id);
        }
    }
}
