using BizDoc.Core.Configuration;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("BizDocConnection1");

builder.Services.AddBizDoc(options =>
{
    options.ApplicationUri = "https://";
}).
    UseSqlServer(connectionString).
    AddFormIdentity(options =>
    {
        options.Password.RequiredLength = 2;
        options.Password.RequireLowercase = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireDigit = false;
        options.Password.RequireNonAlphanumeric = false;
    });


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


//app.UseDefaultFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseBizDoc().
    UseFormIdentity();

app.Run();
