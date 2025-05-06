CREATE DATABASE funcionariosdb;

\c funcionariosdb;

CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    departamento_id INTEGER REFERENCES departamentos(id) ON DELETE SET NULL
);

ALTER TABLE funcionarios ADD COLUMN photo TEXT;

INSERT INTO departamentos (name) VALUES 
    ('Financeiro'),
    ('Producao'),
    ('Logistica'),
    ('Marketing e Vendas'),
    ('Administracao');

INSERT INTO funcionarios (name, cidade, departamento_id) VALUES 
    ('Julia', 'Valinhos', 1),
    ('Gabriela', 'Sao Paulo', 2),
    ('Jack', 'Campinas', 3),
    ('Gabriel', 'Vinhedo', 4),
    ('Kevin', 'Hortolandia', 5),
    ('Fernanda', 'Sao Paulo', 1),
    ('Beatriz', 'Sao Paulo', 2),
    ('Larissa', 'Vinhedo', 3),
    ('Guilherme', 'Vinhedo',4),
    ('Mateus', 'Hortolandia', 5),
    ('Richard', 'Campinas', 1),
    ('Ana', 'Valinhos', 2),
    ('Persy', 'Hortolandia', 3),
    ('Maria', 'Hortolandia', 4),
    ('Luiza', 'Hortolandia', 5);