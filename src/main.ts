import * as core from '@actions/core'
import * as exec from '@actions/exec'

export async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name')
    const password: string = core.getInput('password')
    const key: string = core.getInput('key')
    const groups: string = '["wheel"]'

    /*    const header: string = "[[customizations.user]]"; */
    const filename: string = 'config.toml'

    const content = `
[[customizations.user]]
name =  "${name}"
password = "${password}"
key = "${key}"
groups = ${groups}
`

    core.debug('Create TOML file.')
    await writeToFile(filename, content)

    core.setOutput('output-filename', filename)
  } catch (error) {
    core.setFailed(`Failed: ${(error as Error).message}`)
  }
}

async function writeToFile(file: string, data: string): Promise<void> {
  try {
    const tempFile = `${file}.tmp`
    await exec.exec('sh', ['-c', `echo '${data}' > ${tempFile}`])
    await exec.exec('mv', [tempFile, file])
  } catch (error) {
    core.setFailed(
      `Failed to write to file ${file}: ${(error as Error).message}`
    )
  }
}
