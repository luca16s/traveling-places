using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ISO.Travel.Api.Migrations
{
    /// <inheritdoc />
    public partial class UM : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LOCAL",
                columns: table => new
                {
                    LOCL_SQ_LOCAL = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LOCL_NM_LOCAL = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LOCL_IN_LOCAL = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LOCAL", x => x.LOCL_SQ_LOCAL);
                });

            migrationBuilder.CreateTable(
                name: "VIAGEM",
                columns: table => new
                {
                    VIGM_SQ_VIAGEM = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VIGM_NM_DESTINO = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    VIGM_DT_INICIO = table.Column<DateOnly>(type: "date", nullable: false),
                    VIGM_DT_FIM = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VIAGEM", x => x.VIGM_SQ_VIAGEM);
                });

            migrationBuilder.CreateTable(
                name: "ENDERECO",
                columns: table => new
                {
                    LocalId = table.Column<long>(type: "bigint", nullable: false),
                    LOCL_TX_LOGRADOURO = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    LOCL_NU_NUMERO = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Complemento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LOCL_NU_CEP = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    LOCL_TX_BAIRRO = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LOCL_TX_REFERENCIA = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ENDERECO", x => x.LocalId);
                    table.ForeignKey(
                        name: "FK_ENDERECO_LOCAL_LocalId",
                        column: x => x.LocalId,
                        principalTable: "LOCAL",
                        principalColumn: "LOCL_SQ_LOCAL",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "COORDENADA",
                columns: table => new
                {
                    EnderecoLocalId = table.Column<long>(type: "bigint", nullable: false),
                    CORD_NU_LATITUDE = table.Column<long>(type: "bigint", nullable: false),
                    CORD_NU_LONGITUDE = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_COORDENADA", x => x.EnderecoLocalId);
                    table.ForeignKey(
                        name: "FK_COORDENADA_ENDERECO_EnderecoLocalId",
                        column: x => x.EnderecoLocalId,
                        principalTable: "ENDERECO",
                        principalColumn: "LocalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PAIS",
                columns: table => new
                {
                    EnderecoLocalId = table.Column<long>(type: "bigint", nullable: false),
                    PAIS_NM_PAIS = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PAIS_SG_PAIS = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PAIS", x => x.EnderecoLocalId);
                    table.ForeignKey(
                        name: "FK_PAIS_ENDERECO_EnderecoLocalId",
                        column: x => x.EnderecoLocalId,
                        principalTable: "ENDERECO",
                        principalColumn: "LocalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ESTADO",
                columns: table => new
                {
                    PaisEnderecoLocalId = table.Column<long>(type: "bigint", nullable: false),
                    EST_NM_ESTADO = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    EST_SG_ESTADO = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ESTADO", x => x.PaisEnderecoLocalId);
                    table.ForeignKey(
                        name: "FK_ESTADO_PAIS_PaisEnderecoLocalId",
                        column: x => x.PaisEnderecoLocalId,
                        principalTable: "PAIS",
                        principalColumn: "EnderecoLocalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CIDADE",
                columns: table => new
                {
                    EstadoPaisEnderecoLocalId = table.Column<long>(type: "bigint", nullable: false),
                    CIDE_NM_CIDADE = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CIDADE", x => x.EstadoPaisEnderecoLocalId);
                    table.ForeignKey(
                        name: "FK_CIDADE_ESTADO_EstadoPaisEnderecoLocalId",
                        column: x => x.EstadoPaisEnderecoLocalId,
                        principalTable: "ESTADO",
                        principalColumn: "PaisEnderecoLocalId",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CIDADE");

            migrationBuilder.DropTable(
                name: "COORDENADA");

            migrationBuilder.DropTable(
                name: "VIAGEM");

            migrationBuilder.DropTable(
                name: "ESTADO");

            migrationBuilder.DropTable(
                name: "PAIS");

            migrationBuilder.DropTable(
                name: "ENDERECO");

            migrationBuilder.DropTable(
                name: "LOCAL");
        }
    }
}
