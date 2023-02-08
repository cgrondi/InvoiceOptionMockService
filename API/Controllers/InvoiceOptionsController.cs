using Microsoft.AspNetCore.Mvc;
using CsvHelper;
using System.Globalization;

namespace API.Controllers 
{
    public class InvoiceOptionsController : BaseApiController
    {
        private readonly ILogger<InvoiceOptionsController> _logger;
        private List<InvoiceOption> records;

        public InvoiceOptionsController(ILogger<InvoiceOptionsController> logger)
        {
            _logger = logger;
            string filePath = "./GetInvoiceOptionsData.csv";
            using(var streamReader = new StreamReader(filePath))
            {
                using(var csvReader = new CsvReader(streamReader, CultureInfo.InvariantCulture))
                {
                    csvReader.Context.RegisterClassMap<InvoiceOptionClassMap>();
                    records = csvReader.GetRecords<InvoiceOption>().ToList();
                }
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<InvoiceOption>> Get()
        {
            return Ok(records);
        }

        [HttpGet("get-by-type/{TypeCode}")]
        public ActionResult<IEnumerable<InvoiceOption>> GetInvoiceOptionsByTypeCode(int TypeCode)
        {
            var result = records.Where(x => x.InvoiceTypeCode == TypeCode);
            return Ok(result);
        }

        [HttpGet("get-by-categoryId/{CategoryId}")]
        public ActionResult<IEnumerable<InvoiceOption>> GetInvoiceOptionsByCategoryId(int CategoryId)
        {
            var result = records.Where(x => x.CategoryId == CategoryId);
            return Ok(result);
        }
    }
}