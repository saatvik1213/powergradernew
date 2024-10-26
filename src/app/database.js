const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_c1QOQVfn2aet6BCtbVv",
    host: "pg-375985cb-saatvik1213-8794.f.aivencloud.com",
    port: 10339,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUZZPTSib6Nxx4KcVwnIHpYfLCr4QwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMzk5NmIwOWQtZDIxZi00NTRmLWE4OTctZTQ2ODZmMmY1
MmRlIFByb2plY3QgQ0EwHhcNMjQxMDI2MjI0MzQ0WhcNMzQxMDI0MjI0MzQ0WjA6
MTgwNgYDVQQDDC8zOTk2YjA5ZC1kMjFmLTQ1NGYtYTg5Ny1lNDY4NmYyZjUyZGUg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAK3NMP4m
6MMKYmimot54WebQ5S0ZoGZ2d+zf0pjY6cPzrt1u3RlLoAabSu7KaTfyOoNn1b+8
WFBkvQ0VW+XexeNAyxbpKsrR0Nhd7hEBQ0gta4seV9lyD99u/g/pz9o8Fs3nfDSU
P0Mk+HjDBQu4on6wRywWAIZPOZ+4UuA6hn79oYADDuQMg6KKJVu2mSqw9QWaCAsW
OBtuZfyGYJqfgbrWulIj7hzF7Iy8Z1ze3aGDNFqTadAluhbRrV1rFzmH6UysEqn4
bRtGHw8TTRw9xHw81RNf6Bpa/FuLglMH/O6o9wAG9CjJBkpUZ5Px0D67CwkSBpuu
FfG8caM/l+UrAJjdgpKeOcAr/WbAdpZ3rAX6B2Ym4/TQMg5QfsIvLEfbP+7swkDE
OW4i35NxincesS1NpwCk+Aow5LnNdOcvWp5+PyDEUgbFmMlDN24GIIIYraeCosds
3WGMEPZZlBepnBlHBtbJhbgrZhp36pYrGXOLSUzcK/ScZjmiNqPGjSzDgQIDAQAB
oz8wPTAdBgNVHQ4EFgQUqAXzu6s5/n/EVVBJyfPuy1op0q0wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEidFMTGYN1LztZr
WacFjrE9kxeAMCZu2wh/dkreKe/WM6DDUd5A4FOxuguJabKkshv1kJyX6ol7WjiP
InxxRcI/1bFV38IFSORJZa52Knft37X63qFYrXODDcqbLSa0tbUyl9BbZTdthX3l
d57MZr30kACzZ3vqHb3qH+JHNUfv0uX8Ud6kH8EuIh5Xi6M74gaM4y5nVKwfSzMK
ajQIagQjiOs73k8NPFEqrzZnL+eVldGSYRekUckLuRxKyw0g6zKiUPnuENHH4klH
GvWmAil28lARQA+eLXlK4N+YECtBeAz+7wZ1MnCqnvt+TFq1nUvKfIozfQx8ONmr
l9Y4mpF9DwwDxyG4HoskSl7p+ghSAHFdgNtp35yJf3B2hBkZl1YK0DikZUSHiOjM
dDNgkMhirN3k/nqzYLGpUF8aEpf5FfQahYSpXD1jNHZfco0B7c9cW/PsaBnRr3IO
YdIQdVhqPuZgZt0VxRn1ke6HgK9EltrFYPptgcm/JXTcyChEDQ==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});