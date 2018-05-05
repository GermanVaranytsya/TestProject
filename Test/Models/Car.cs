using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Test.Models
{
    public class Car
    {
        [Required]
        [DisplayName("Брэнд")]
        [UIHint("Brand")]
        public String brand { get; set; }
        [Required]
        [UIHint("Color")]
        [DisplayName("Цвет")]
        public String color { get; set; }
        [Required]
        [UIHint("Fuel")]
        [DisplayName("Топливо")]
        public String fuel { get; set; }
        [Required]
        [UIHint("Transmission")]
        [DisplayName("Коробка передач")]
        public String transmission { get; set; }
        [Required]
        [DataType(DataType.Date)]
        [DisplayName("Дата")]
        public DateTime date { get; set; }
        [DisplayName("Примечание")]
        [Required]
        [System.ComponentModel.DataAnnotations.RegularExpression("[a-zA-Z]+")]
        [MaxLength(50)]
        public String text { get; set; }
    }
}