export class Frameworks {
  frameworks: Framework[]

  constructor(frameworks: Framework[]) {
    this.frameworks = frameworks
  }

  set isChecked(id: number) {
    if (this.frameworks[id].isChecked) {
      this.frameworks[id].isChecked = false
      return
    }
    for (const framework of this.frameworks) {
      framework.isChecked = false
    }
    this.frameworks[id].isChecked = true
  }
}

export class Framework {
  id: number
  title: string
  isChecked = false

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}

export class Capability {
  id: number
  title: string
  isChecked = false

  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}

export class Project {
  id: number
  image: string
  title: string
  description: string
  isDeployed: boolean
  websiteLink?: string

  constructor(id: number, image: string, title: string, description: string, isDeployed: boolean, websiteLink?: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.isDeployed = isDeployed
    if (websiteLink) {
      this.websiteLink = websiteLink
    }
  }
}