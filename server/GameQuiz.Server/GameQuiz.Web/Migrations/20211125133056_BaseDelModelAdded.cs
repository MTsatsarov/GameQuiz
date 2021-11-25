using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GameQuiz.Web.Migrations
{
    public partial class BaseDelModelAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Votes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "Votes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Votes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "Votes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Quizzes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "Quizzes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Quizzes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "Quizzes",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Questions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "Questions",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Questions",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "Questions",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Answers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "Answers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Answers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedOn",
                table: "Answers",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "Votes");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "ModifiedOn",
                table: "Answers");
        }
    }
}
