﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace PaymentAPI.Models
{
    public class Paymentdetail
    {

        [Key]
        public int PaymentDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CardOwnerName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; } = "";

        //mm/y
        [Column(TypeName = "nvarchar(5)")]
        public string ExpirationDate { get; set; } = "";

        [Column(TypeName = "nvarchar(3)")]
        public string SecurityCode { get; set; } = "";
    }
}
