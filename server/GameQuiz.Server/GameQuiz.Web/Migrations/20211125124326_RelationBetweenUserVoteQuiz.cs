using Microsoft.EntityFrameworkCore.Migrations;

namespace GameQuiz.Web.Migrations
{
    public partial class RelationBetweenUserVoteQuiz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatorId",
                table: "Quizzes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Quizzes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ApplicationUserQuiz",
                columns: table => new
                {
                    QuizzesId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UsersId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUserQuiz", x => new { x.QuizzesId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_ApplicationUserQuiz_AspNetUsers_UsersId",
                        column: x => x.UsersId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ApplicationUserQuiz_Quizzes_QuizzesId",
                        column: x => x.QuizzesId,
                        principalTable: "Quizzes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationUserVote",
                columns: table => new
                {
                    UsersId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    VotesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUserVote", x => new { x.UsersId, x.VotesId });
                    table.ForeignKey(
                        name: "FK_ApplicationUserVote_AspNetUsers_UsersId",
                        column: x => x.UsersId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ApplicationUserVote_Votes_VotesId",
                        column: x => x.VotesId,
                        principalTable: "Votes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUserQuiz_UsersId",
                table: "ApplicationUserQuiz",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationUserVote_VotesId",
                table: "ApplicationUserVote",
                column: "VotesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationUserQuiz");

            migrationBuilder.DropTable(
                name: "ApplicationUserVote");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Quizzes");
        }
    }
}
