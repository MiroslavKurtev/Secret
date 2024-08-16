BEGIN;

CREATE TABLE IF NOT EXISTS app_user (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    user_role character varying,
    team character varying,
    first_name character varying,
    last_name character varying,
    date_of_birth date,
    hashed_password character varying NOT NULL,
    email character varying NOT NULL,
    gender character varying(1) CHECK (gender IN ('m', 'f')),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS competition (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    competition_name character varying(75) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS competition_day (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    competition_id integer NOT NULL,
    competition_day_date date NOT NULL,
    competition_day_location character varying NOT NULL,
    competition_day_type character varying NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (competition_id) REFERENCES competition(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS course (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    competition_day_id integer NOT NULL,
    gender character varying(1) NOT NULL CHECK (gender IN ('m', 'f')),
    course_group character varying NOT NULL,
    course_time_first integer,
    course_length double precision NOT NULL,
    elevation integer,
    map_clean character varying,
    PRIMARY KEY (id),
    FOREIGN KEY (competition_day_id) REFERENCES competition_day(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_course (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    course_id integer NOT NULL,
    user_id integer NOT NULL,
    track character varying,
    PRIMARY KEY (id),
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS workout (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1),
    workout_date date NOT NULL,
    workout_type character varying NOT NULL,
    workout_location character varying NOT NULL,
    workout_length double precision NOT NULL,
    additional_information character varying,
    users_participated integer[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS user_workout (
    user_id integer NOT NULL,
    workout_id integer NOT NULL,
    PRIMARY KEY (user_id, workout_id),
    FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE,
    FOREIGN KEY (workout_id) REFERENCES workout(id) ON DELETE CASCADE
);

END;
