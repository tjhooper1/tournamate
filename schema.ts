import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tournamentId: integer("tournament_id")
    .notNull()
    .references(() => tournaments.id, { onDelete: "cascade" }),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const tournamentsRelations = relations(tournaments, ({ many }) => ({
  teams: many(teams),
}));

export const teamsRelations = relations(teams, ({ many }) => ({
  players: many(players),
}));

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  teamId: integer("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  team1Id: integer("team1_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  team2Id: integer("team2_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  tournamentId: integer("tournament_id").references(() => tournaments.id, {
    onDelete: "cascade",
  }),
  winnerId: integer("winner_id").references(() => teams.id, {
    onDelete: "cascade",
  }),
  roundId: integer("round_id").references(() => rounds.id, {
    onDelete: "cascade",
  }),
});

export const rounds = pgTable("rounds", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tournamentId: integer("tournament_id")
    .notNull()
    .references(() => tournaments.id, { onDelete: "cascade" }),
  roundNumber: integer("round_number").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertTournament = typeof tournaments.$inferInsert;
export type SelectTournament = typeof tournaments.$inferSelect;

export type InsertTeam = typeof teams.$inferInsert;
export type SelectTeam = typeof teams.$inferSelect;

export type InsertPlayer = typeof players.$inferInsert;
export type SelectPlayer = typeof players.$inferSelect;

export type InsertMatch = typeof matches.$inferInsert;
export type SelectMatch = typeof matches.$inferSelect;

export type InsertRound = typeof rounds.$inferInsert;
export type SelectRound = typeof rounds.$inferSelect;
