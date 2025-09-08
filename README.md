@ferrory/bootc-toml-action

GitHub action for creating config.toml for Bootc image creation.

## Scope

This action will create the user information for the config.toml. Parameter
groups is currently not supported.

## Usage

Create config.tml using the following workflow snippet:

```yaml
- name: Create config.toml
  id: create-config-toml
  uses: ferrory/bootc-toml-action@v0.0.1
  with:
    name: ansible
    password: changeme
    key: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCpuaXsXfdVqiECRmJPafNIjuDR3761Xor2zheH0BaxOvCk7oeLc48sD7IbL3nKgIe0ostQH+Y7pXfGCuBKvC+Gkax0c69jTz6R6tQAiFA5on8uDWYwXLdjKICBZ7bpGoQqWMwggi5zUrjy7llG79JtYxOjH2P9Eme21uUWyyHJDqJRxYEdRh0kPo3ZvIoAD3a0Bq+H7rQ5W/rLqhIHK/+9zJZujfuBtwJn/93YgjDqPWz5BMDk0yv9rVhljv/9x4NqYyGQzszZ3Vf5oCKJcsO8rwg8FrXKmTExgddVZ8rqqo0xlXh5Uxhn5A7S+rdQ+nF5qevyWEeCCsheAYaToNhFpAssrfKoNvqrSrUHK/r9qZKPwgl5KuMkIEYtoqPyfWXuOmTMPiz4FgKs2rk+xVfTz4Yi7m1ghg7noF25ZAZmWYVcqq5SoMVoyaYDs3C82KeylMDaYqbMEJcnOy+JBrt57Z0qdAre5ZxoFk4yOHUaSvp8OUSkJ7SjqbkCFHpSyN91UNnd0oFTb/xbjr3BHRT5qB9BXgYLvo/8voVBobKIx8QTlfs4p7oPMR0DlI84An4Z3avT/p348pBoPAkBHDUix8EnR0lo785DrNYaG6/Gb3XFGI+JDCsaH8nPeaU4KZ97KkBzMiZT3QLQPviUF3D+XuPoCR9YqBYAWapZHviXNw== rory@ferrory.net
```

## Inputs

### `name`

The name of the user.

### `password`

The password of the user.

### `key`

The public SSH key for the user.

## Outputs

### `output-filename`

The output filename currently hardcoded to config.toml

## License

This project is licensed under the Apache License, Version 2.0 - see the
[LICENSE](./LICENSE) file for details.
