const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("InsuranceFactory", () => {
    let InsuranceFactory;
    let Insurance;
    let insuranceFactory;
    let verifierCompany;
    let owner;
    let addr1;
    let addr2;

    before(async () => {
        [owner, addr1, addr2] = await ethers.getSigners();

        InsuranceFactory = await ethers.getContractFactory("InsuranceFactory");
        Insurance = await ethers.getContractFactory("Insurance");

        verifierCompany = owner.address;
        insuranceFactory = await InsuranceFactory.deploy(verifierCompany);
    });

    it("should create a new insurance contract", async () => {
        await insuranceFactory.createInsurance();

        const contractAddress = await insuranceFactory.getInsuranceContractByOwner(owner.address);
        expect(contractAddress).to.not.be.null;
    });

    it("should return the correct insurance contract for an owner", async () => {
        const contractAddress1 = await insuranceFactory.getInsuranceContractByOwner(owner.address);
        const contractAddress2 = await insuranceFactory.getInsuranceContractByOwner(addr1.address);

        expect(contractAddress1).to.not.equal(contractAddress2);
    });

    it("should return the list of deployed insurance contracts", async () => {
        
        await insuranceFactory.connect(addr2).createInsurance();

        const deployedContracts = await insuranceFactory.getDeployedInsuranceContracts();

        expect(deployedContracts).to.have.lengthOf(2);
    });

    it("should not allow creating multiple contracts for the same address", async () => {
        await expect(insuranceFactory.createInsurance()).to.be.revertedWith(
            "Contract already exists for this address"
        );
    });
});
