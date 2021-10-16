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
	"amount" varchar NOT NULL,
	"date" varchar,
	"category_id" bigint,
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

ALTER TABLE public.transactions ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("category_id") REFERENCES public.categories("_id")

INSERT INTO public.categories VALUES (1, 'test');
INSERT INTO public.transactions VALUES (1, 'Tarry transaction', '5', '10/16/2021', 1);