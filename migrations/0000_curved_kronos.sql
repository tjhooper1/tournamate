CREATE TABLE IF NOT EXISTS "matches_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"team1_id" integer NOT NULL,
	"team2_id" integer NOT NULL,
	"tournament_id" integer,
	"winner_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "players_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"team_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rounds_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"tournament_id" integer NOT NULL,
	"round_number" integer NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"tournament_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tournaments_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"start_date" timestamp,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "matches_table" ADD CONSTRAINT "matches_table_team1_id_teams_table_id_fk" FOREIGN KEY ("team1_id") REFERENCES "public"."teams_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "matches_table" ADD CONSTRAINT "matches_table_team2_id_teams_table_id_fk" FOREIGN KEY ("team2_id") REFERENCES "public"."teams_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "matches_table" ADD CONSTRAINT "matches_table_tournament_id_tournaments_table_id_fk" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournaments_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "matches_table" ADD CONSTRAINT "matches_table_winner_id_teams_table_id_fk" FOREIGN KEY ("winner_id") REFERENCES "public"."teams_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "players_table" ADD CONSTRAINT "players_table_team_id_teams_table_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rounds_table" ADD CONSTRAINT "rounds_table_tournament_id_tournaments_table_id_fk" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournaments_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_table" ADD CONSTRAINT "teams_table_tournament_id_tournaments_table_id_fk" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournaments_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
