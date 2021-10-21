SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.transactions (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"amount" DECIMAL(19, 2) NOT NULL,
	"date" varchar,
	"category_id" bigint,
	"user_id" bigint,
	CONSTRAINT "transactions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.categories (
	"_id" serial NOT NULL,
	"category" varchar NOT NULL,
    CONSTRAINT "categories_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	"budget" bigint,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
	OIDS=FALSE
);

INSERT INTO public.users VALUES (1, 'admin', 'password123', 'Cat', 'Snakes', 5000);


ALTER TABLE public.transactions ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("category_id") REFERENCES public.categories("_id");
ALTER TABLE public.transactions ADD CONSTRAINT "transctions_fk1" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

INSERT INTO public.categories VALUES (1, 'test');
INSERT INTO public.categories VALUES (2, 'Housing/Rent');
INSERT INTO public.categories VALUES (3, 'Utilities');
INSERT INTO public.categories VALUES (4, 'Gas');
INSERT INTO public.categories VALUES (5, 'Groceries');
INSERT INTO public.categories VALUES (6, 'Dining Out');
INSERT INTO public.categories VALUES (7, 'Drinks');
INSERT INTO public.categories VALUES (8, 'Entertainment');
INSERT INTO public.categories VALUES (9, 'Savings');
INSERT INTO public.categories VALUES (10, 'Other');