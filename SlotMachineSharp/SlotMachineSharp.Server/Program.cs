using Microsoft.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

        string connectionString = "Server=OML-93XLW84\\SQLEXPRESS;Database=gambleDB;User Id=admin;Password=Skolene123456789;TrustServerCertificate=True;";

        //using (SqlConnection conn = new SqlConnection(connectionString))
        //{
        //    conn.Open();

        //    string sql = @"INSERT INTO gambleLog (gambleAmount, res1, res2, res3, wincheck, gambler)
        //                   VALUES (@amount, @res1, @res2, @res3, @wincheck, @gambler)";

        //    using (SqlCommand cmd = new SqlCommand(sql, conn))
        //    {
        //        cmd.Parameters.AddWithValue("@amount", 100);
        //        cmd.Parameters.AddWithValue("@res1", 1);
        //        cmd.Parameters.AddWithValue("@res2", 2);
        //        cmd.Parameters.AddWithValue("@res3", 3);
        //        cmd.Parameters.AddWithValue("@wincheck", true);
        //        cmd.Parameters.AddWithValue("@gambler", 1);

        //        int rowsAffected = cmd.ExecuteNonQuery();
        //        Console.WriteLine($"Inserted {rowsAffected} row(s).");
        //    }
        //}

    using (SqlConnection conn = new SqlConnection(connectionString))
    {
        conn.Open();

        //string sql = @"SELECT * FROM userTable";

        //using (SqlCommand cmd = new SqlCommand(sql, conn))
        //{
        //    cmd.Parameters.AddWithValue("@amount", 100);
        //    cmd.Parameters.AddWithValue("@res1", 1);
        //    cmd.Parameters.AddWithValue("@res2", 2);
        //    cmd.Parameters.AddWithValue("@res3", 3);
        //    cmd.Parameters.AddWithValue("@wincheck", true);
        //    cmd.Parameters.AddWithValue("@gambler", 1);

        //    int rowsAffected = cmd.ExecuteNonQuery();
        //    Console.WriteLine($"Inserted {rowsAffected} row(s).");
        //}



            string query = "SELECT gambleID, gambleAmount, res1, res2, res3, wincheck, gambler FROM gambleLog";

            using (SqlCommand cmd = new SqlCommand(query, conn))
            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    int id = reader.GetInt32(0);
                    int amount = reader.GetInt32(1);
                    int r1 = reader.GetInt32(2);
                    int r2 = reader.GetInt32(3);
                    int r3 = reader.GetInt32(4);
                    bool win = reader.GetBoolean(5);
                    int gambler = reader.GetInt32(6);

                    Console.WriteLine($"ID: {id}, Amount: {amount}, Rolls: [{r1}, {r2}, {r3}], Win: {win}, Gambler: {gambler}");
                }
            }
        

    }

}


app.UseHttpsRedirection();

app.UseCors("AllowAll"); // Add this before app.UseAuthorization()

app.UseAuthorization();


app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

