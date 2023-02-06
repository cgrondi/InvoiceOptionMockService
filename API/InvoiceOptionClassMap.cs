using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper.Configuration;

namespace API
{
    public class InvoiceOptionClassMap: ClassMap<InvoiceOption>
    {
        public InvoiceOptionClassMap()
        {
            Map(m => m.InvoiceTypeCode).Name("ns3:InvoiceTypeCode");
            Map(m => m.InvoiceTypeDescription).Name("ns3:InvoiceTypeDescription");
            Map(m => m.CategoryId).Name("ns3:CategoryID");
            Map(m => m.CategoryDescription).Name("ns3:CategoryDescription");
            Map(m => m.SubCategoryId).Name("ns3:SubCategoryID");
            Map(m => m.SubCategoryDescription).Name("ns3:SubCategoryDescription");
        }
    }
}