CREATE DATABASE funcionariosdb;

\c funcionariosdb;

CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    photo TEXT
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    departamento_id INTEGER REFERENCES departamentos(id) ON DELETE SET NULL
);

INSERT INTO departamentos (name) VALUES 
    ('Financeiro'),
    ('Produção'),
    ('Logística'),
    ('Marketing e Vendas'),
    ('Administração');

INSERT INTO funcionarios (name, cidade, departamento_id) VALUES 
    ('Júlia', 'Valinhos', 1),
    ('Gabriela', 'Sao Paulo', 2),
    ('Jack', 'Campinas', 3),
    ('Gabriel', 'Vinhedo', 4),
    ('Kevin', 'Hortolândia', 5),
    ('Fernanda', 'Sao Paulo', 1),
    ('Beatriz', 'Sao Paulo', 2),
    ('Larissa', 'Vinhedo', 3),
    ('Guilherme', 'Vinhedo',4),
    ('Mateus', 'Hortolândia', 5),
    ('Richard', 'Campinas', 1),
    ('Ana', 'Valinhos', 2),
    ('Persy', 'Hortolândia', 3),
    ('Maria', 'Hortolândia', 4),
    ('Luiza', 'Hortolândia', 5);